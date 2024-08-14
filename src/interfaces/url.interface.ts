import mongoose from 'mongoose';

export interface IUrl {
  shortId: string;
  redirectUrl: string;
  visitHistory: number[];
  user: mongoose.Schema.Types.ObjectId;
}
