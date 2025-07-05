import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Submission from '@/models/Submission';
import { verifyToken, getTokenFromRequest } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const token = getTokenFromRequest(request);
    if (!token) {
      return NextResponse.json({ error: 'No token provided' }, { status: 401 });
    }

    const payload = verifyToken(token);
    if (!payload) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }

    const {
      title,
      description,
      githubLink,
      demoVideoLink,
      liveLink,
      teamMembers,
      technologies
    } = await request.json();

    // Check if user already has a submission
    const existingSubmission = await Submission.findOne({ userId: payload.userId });
    if (existingSubmission) {
      return NextResponse.json(
        { error: 'You have already submitted a project. You can update your existing submission.' },
        { status: 400 }
      );
    }

    // Create new submission
    const submission = new Submission({
      userId: payload.userId,
      title: title.trim(),
      description: description.trim(),
      githubLink: githubLink.trim(),
      demoVideoLink: demoVideoLink?.trim() || '',
      liveLink: liveLink?.trim() || '',
      teamMembers: teamMembers?.map((member: string) => member.trim()).filter(Boolean) || [],
      technologies: technologies?.map((tech: string) => tech.trim()).filter(Boolean) || [],
    });

    await submission.save();

    return NextResponse.json({
      message: 'Project submitted successfully',
      submission
    }, { status: 201 });

  } catch (error: any) {
    console.error('Submission error:', error);
    
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map((err: any) => err.message);
      return NextResponse.json(
        { error: errors.join(', ') },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const token = getTokenFromRequest(request);
    if (!token) {
      return NextResponse.json({ error: 'No token provided' }, { status: 401 });
    }

    const payload = verifyToken(token);
    if (!payload) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }

    const submission = await Submission.findOne({ userId: payload.userId })
      .populate('userId', 'name email teamName');

    return NextResponse.json({ submission });

  } catch (error: any) {
    console.error('Get submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    await connectDB();

    const token = getTokenFromRequest(request);
    if (!token) {
      return NextResponse.json({ error: 'No token provided' }, { status: 401 });
    }

    const payload = verifyToken(token);
    if (!payload) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }

    const {
      title,
      description,
      githubLink,
      demoVideoLink,
      liveLink,
      teamMembers,
      technologies
    } = await request.json();

    const submission = await Submission.findOneAndUpdate(
      { userId: payload.userId },
      {
        title: title.trim(),
        description: description.trim(),
        githubLink: githubLink.trim(),
        demoVideoLink: demoVideoLink?.trim() || '',
        liveLink: liveLink?.trim() || '',
        teamMembers: teamMembers?.map((member: string) => member.trim()).filter(Boolean) || [],
        technologies: technologies?.map((tech: string) => tech.trim()).filter(Boolean) || [],
      },
      { new: true, runValidators: true }
    );

    if (!submission) {
      return NextResponse.json({ error: 'Submission not found' }, { status: 404 });
    }

    return NextResponse.json({
      message: 'Submission updated successfully',
      submission
    });

  } catch (error: any) {
    console.error('Update submission error:', error);
    
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map((err: any) => err.message);
      return NextResponse.json(
        { error: errors.join(', ') },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}