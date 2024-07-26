
const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;
import axios from 'axios';

export default class DiscordService {

    static async sendMessageToChannel(message: string) {
        try {
            const response = await axios.post(
                DISCORD_WEBHOOK_URL as string,
                {
                    content: message,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                },
            );
        } catch (error) {
            console.error(error);
        }
    }
}


