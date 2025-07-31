// src/models/admin/admin.model.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IAdmin extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  bio?: string;
  role: 'admin' | 'subAdmin';
  avatar?: string;
  password: string;

  isActive: boolean;
  lastLogin?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

const AdminSchema: Schema = new Schema<IAdmin>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    bio: { type: String },
    role: { type: String, enum: ['admin', 'subAdmin'], default: 'subAdmin' },
    avatar: { type: String },
    password: { type: String, required: true },

    isActive: { type: Boolean, default: true },
    lastLogin: { type: Date },
  },
  { timestamps: true }
);

const Admin = mongoose.model<IAdmin>('Admin', AdminSchema);
export default Admin;