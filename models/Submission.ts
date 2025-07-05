import mongoose from 'mongoose';

export interface ISubmission extends mongoose.Document {
  userId: mongoose.Types.ObjectId;
  title: string;
  description: string;
  githubLink: string;
  demoVideoLink?: string;
  liveLink?: string;
  teamMembers: string[];
  technologies: string[];
  status: 'pending' | 'approved' | 'winner' | 'rejected';
  createdAt: Date;
  updatedAt: Date;
}

const submissionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: [true, 'Project title is required'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Project description is required'],
    maxlength: [1000, 'Description cannot exceed 1000 characters']
  },
  githubLink: {
    type: String,
    required: [true, 'GitHub link is required'],
    match: [/^https:\/\/github\.com\/.*/, 'Please enter a valid GitHub URL']
  },
  demoVideoLink: {
    type: String,
    match: [/^https:\/\/(www\.)?(youtube\.com|youtu\.be|vimeo\.com)\/.*/, 'Please enter a valid video URL']
  },
  liveLink: {
    type: String,
    match: [/^https?:\/\/.*/, 'Please enter a valid URL']
  },
  teamMembers: [{
    type: String,
    trim: true
  }],
  technologies: [{
    type: String,
    trim: true
  }],
  status: {
    type: String,
    enum: ['pending', 'approved', 'winner', 'rejected'],
    default: 'pending'
  }
}, {
  timestamps: true
});

export default mongoose.models.Submission || mongoose.model<ISubmission>('Submission', submissionSchema);