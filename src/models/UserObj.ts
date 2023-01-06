export interface UserObj {
    createdAt: Date;
    orgName: string;
    userName: string;
    email: string;
    phoneNumber: string;
    lastActiveDate: Date;
    profile: Profile;
    guarantor: Guarantor;
    accountBalance: string;
    accountNumber: string;
    socials: Socials;
    education: Education;
    id: string;
}


export interface Profile {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    avatar: string;
    gender: string;
    bvn: string;
    address: string;
    currency: string;
}

export interface Guarantor {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    gender: string;
    address: string;
}

export interface Socials {
    facebook: string;
    instagram: string;
    twitter: string;
}

export interface Education {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    monthlyIncome: string[];
    loanRepayment: string;
}