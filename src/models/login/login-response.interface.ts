export interface LoginResponse{
    result?: {
        user?: {
            uid?: string;
            displayName?: string;
            photoURL?: string;
            email?: string;
            phoneNumber?: string;
        },
        additionalUserInfo?: {
            isNewUser?: Boolean
        }
    };
    error?:{
        code?: string;
        message?: string;
    }
}