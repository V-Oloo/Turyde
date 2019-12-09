export class UserProfile {
  id?:	string;
  avator?: string;
  avatorUrl?: string;
  mimeType?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber: string;
  email: string;
  fullName?: string;
  phoneNumberVerified?:	boolean;
  emailVerified?: boolean;
  companyId?: number;
  roles: string;
  boundary: string;
}
