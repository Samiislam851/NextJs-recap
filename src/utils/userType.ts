export type userType = {
    
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    userRoleId: string;
    verificationCode: string;
    registrationType: string;
    userType: string;
    status: string;
    clientId: string;
    isRegistered: boolean;
    isVerified: boolean;
    isDeleted: boolean;
    lastLogin: string;
    phone: string;
    stripeCustomerId: string;
    created_at: string;
    updated_at: string;
    __v: number;
    resetCode: string;
    scopes: string[];
}