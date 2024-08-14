import mongoose, { Schema } from 'mongoose';
import { IUrl } from '../interfaces/url.interface';

const urlSchema = new mongoose.Schema<IUrl>(
  {
    shortId: {
      type: String,
      unique: true,
    },
    redirectUrl: {
      type: String,
      required: [true, 'Redirect URL is Required!'],
      unique: true,
    },
    visitHistory: [{ timestamp: { type: Number } }],
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true },
);

const URL = mongoose.model('URL', urlSchema);
export default URL;
