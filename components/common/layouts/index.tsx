import AuthLayout from "./AuthLayout";
import MainLayout from "./MainLayout";
import GuestLayout from "./GuestLayout";
import ErrorLayout from "./ErrorLayout";

export const Layouts = {
    Main: MainLayout,
    Auth: AuthLayout,
    Guest: GuestLayout,
    Error: ErrorLayout,

};

export type LayoutKeys = keyof typeof Layouts; // 'Main' | 'Auth' | 'Guest' | 'Error'
