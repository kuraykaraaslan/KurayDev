export function PrismaAdapter(prisma) {
    const p = prisma;
    return {
        // We need to let Prisma generate the ID because our default UUID is incompatible with MongoDB
        createUser: ({ id: _id, ...data }) => {
            return p.user.create({ data });
        },
        getUser: (id) => p.user.findUnique({ where: { id } }),
        getUserByEmail: (email) => p.user.findUnique({ where: { email } }),
        async getUserByAccount(provider_providerAccountId) {
            console.log("provider_providerAccountId", provider_providerAccountId);
            const account = await p.account.findFirst({
                where: { provider_providerAccountId },
                select: { user: true },
            });
            if (!account) { return null; }
            
            if (!account.user) { return null; }

            return account.user;
        },
        updateUser: ({ id, ...data }) => p.user.update({ where: { id }, data }),
        deleteUser: (id) => p.user.delete({ where: { id } }),
        linkAccount: (data) => p.account.create({ data }),
        unlinkAccount: (provider_providerAccountId) => p.account.delete({
            where: { provider_providerAccountId },
        }),
        async getSessionAndUser(sessionToken) {
            const userAndSession = await p.session.findUnique({
                where: { sessionToken },
                include: { user: true },
            });
            if (!userAndSession)
                return null;
            const { user, ...session } = userAndSession;
            return { user, session };
        },
        createSession: (data) => p.session.create({ data }),
        updateSession: (data) => p.session.update({ where: { sessionToken: data.sessionToken }, data }),
        deleteSession: (sessionToken) => p.session.delete({ where: { sessionToken } }),
        async createVerificationToken(data) {
            const verificationToken = await p.verificationToken.create({ data });
            // @ts-expect-errors // MongoDB needs an ID, but we don't
            if (verificationToken.id)
                delete verificationToken.id;
            return verificationToken;
        },
        async useVerificationToken(identifier_token) {
            try {
                const verificationToken = await p.verificationToken.delete({
                    where: { identifier_token },
                });
                // @ts-expect-errors // MongoDB needs an ID, but we don't
                if (verificationToken.id)
                    delete verificationToken.id;
                return verificationToken;
            }
            catch (error) {
                // If token already used/deleted, just return null
                // https://www.prisma.io/docs/reference/api-reference/error-reference#p2025
                if (error.code === "P2025")
                    return null;
                throw error;
            }
        },
        async getAccount(providerAccountId, provider) {
            return p.account.findFirst({
                where: { providerAccountId, provider },
            });
        },
        async createAuthenticator(authenticator) {
            return p.authenticator.create({
                data: authenticator,
            });
        },
        async getAuthenticator(credentialID) {
            return p.authenticator.findUnique({
                where: { credentialID },
            });
        },
        async listAuthenticatorsByUserId(userId) {
            return p.authenticator.findMany({
                where: { userId },
            });
        },
        async updateAuthenticatorCounter(credentialID, counter) {
            return p.authenticator.update({
                where: { credentialID },
                data: { counter },
            });
        },
    };
}
