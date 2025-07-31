// user.model.ts
import mongoose, { Schema, model, Document, Types, Model } from 'mongoose';

interface Notification {
  message: string;
  type: string;
  timestamp: Date;
  read: boolean;
}

export interface IUser extends Document {
  email: string;
  dateCreated?: Date;
  // isEmailVerified?: boolean;
  // emailVerificationCode?: number;
  // emailVerificationCodeExpires?: Date;
  // resetPasswordOtp?: number;
  // resetPasswordToken?: string;
  // resetPasswordExpires?: Date;
  role: string;
  notifications: Types.DocumentArray<Notification>;
  googleId?: string;  // Added field for Google user ID
}

const notificationSchema = new Schema<Notification>({
  message: { type: String, required: true },
  type: { type: String },
  timestamp: { type: Date, default: Date.now },
  read: { type: Boolean, default: false }
});

const userSchema: Schema<IUser> = new Schema(
  {
    email: { type: String, unique: true, required: true },
    dateCreated: { type: Date, default: Date.now },
    // emailVerificationCode: { type: Number },
    // emailVerificationCodeExpires: { type: Date },
    // isEmailVerified: { type: Boolean, default: false },
    // resetPasswordToken: { type: String },
    // resetPasswordOtp: { type: Number },
    // resetPasswordExpires: { type: Date },
    notifications: [notificationSchema],
    role: { type: String, default: 'user' },
    googleId: { type: String }  // Added field for Google user ID
  },
  { collection: 'users' }
);

const User: Model<IUser> = mongoose.model<IUser>('User', userSchema);

export default User;
