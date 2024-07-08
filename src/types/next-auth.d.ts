import 'next-auth';

declare module 'next-auth' {
    interface Session {
        user?: User;
        accessToken?: string;
        expires?: string;
    }

    interface JWT {
        user?: any;
        accessToken?: string;
    }

    interface User {
        id: string;
        email: string;
        phone: string;
        name: string;
        token?: string | null;
        userId?: string;
        profileImage?: string | null;
        firstName?: string | null;
        expertise?: string | null;
        photoUrl?: string | null;
        username?: string | null;
    }
}
