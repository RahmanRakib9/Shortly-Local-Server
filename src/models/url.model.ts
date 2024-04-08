import mongoose from 'mongoose';
import { IUrl } from '../interfaces/url.interface';

const urlSchema = new mongoose.Schema<IUrl>(
  {
    shortId: {
      type: String,
      unique: true,
    },
    redirectUrl: {
      type: String,
    },
    visitHistory: [{ timestamp: { type: Number } }],
  },
  { timestamps: true },
);

const URL = mongoose.model('URL', urlSchema);
export default URL;
