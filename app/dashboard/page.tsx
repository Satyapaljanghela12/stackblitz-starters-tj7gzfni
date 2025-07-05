'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FiUser, FiUsers, FiCode, FiCalendar, FiTrophy, FiEdit3 } from 'react-icons/fi';
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link';

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [submission, setSubmission] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');

    if (!token || !userData) {
      router.push('/auth/login');
      return;
    }

    setUser(JSON.parse(userData));
    fetchSubmission();
  }, [router]);

  const fetchSubmission = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('/api/submission', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setSubmission(data.submission);
      }
    } catch (error) {
      console.error('Error fetching submission:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    toast.success('Logged out successfully');
    router.push('/');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const stats = [
    {
      icon: <FiCalendar className="w-6 h-6" />,
      title: 'Days Left',
      value: '45',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: 'Participants',
      value: '500+',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <FiCode className="w-6 h-6" />,
      title: 'Projects',
      value: '100+',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <FiTrophy className="w-6 h-6" />,
      title: 'Prize Pool',
      value: '$50K',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">WW</span>
              </div>
              <span className="font-bold text-xl text-gray-900">WebWave</span>
            </Link>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Welcome, {user?.name}!</span>
              <button
                onClick={handleLogout}
                className="text-gray-600 hover:text-red-600 transition-colors duration-200"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome to your Dashboard!
          </h1>
          <p className="text-gray-600">
            Track your progress and manage your hackathon participation.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${stat.color} text-white mb-4`}>
                {stat.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-gray-600">{stat.title}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Profile</h2>
              <Link
                href="/dashboard/profile"
                className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
              >
                <FiEdit3 className="w-5 h-5" />
              </Link>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <FiUser className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{user?.name}</p>
                  <p className="text-sm text-gray-600">{user?.email}</p>
                </div>
              </div>
              
              {user?.teamName && (
                <div className="flex items-center space-x-3">
                  <FiUsers className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-600">Team</p>
                    <p className="font-medium text-gray-900">{user.teamName}</p>
                  </div>
                </div>
              )}
              
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Status</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                    Registered
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Submission Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Project Submission</h2>
              {submission ? (
                <Link
                  href="/dashboard/submit"
                  className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                >
                  <FiEdit3 className="w-5 h-5" />
                </Link>
              ) : null}
            </div>

            {submission ? (
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{submission.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{submission.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      {submission.technologies?.map((tech: string, index: number) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      submission.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      submission.status === 'approved' ? 'bg-green-100 text-green-800' :
                      submission.status === 'winner' ? 'bg-purple-100 text-purple-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {submission.status.charAt(0).toUpperCase() + submission.status.slice(1)}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">GitHub Repository</p>
                    <a
                      href={submission.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      View on GitHub →
                    </a>
                  </div>
                  
                  {submission.liveLink && (
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Live Demo</p>
                      <a
                        href={submission.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                      >
                        View Live Demo →
                      </a>
                    </div>
                  )}
                </div>

                {submission.teamMembers?.length > 0 && (
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600 mb-2">Team Members</p>
                    <div className="flex flex-wrap gap-2">
                      {submission.teamMembers.map((member: string, index: number) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs"
                        >
                          {member}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-8">
                <FiCode className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No Project Submitted</h3>
                <p className="text-gray-600 mb-4">
                  You haven't submitted your project yet. Submit your amazing web application to participate in the hackathon!
                </p>
                <Link
                  href="/dashboard/submit"
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                >
                  Submit Project
                </Link>
              </div>
            )}
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 bg-white p-6 rounded-xl shadow-sm"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/dashboard/submit"
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 group"
            >
              <FiCode className="w-6 h-6 text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-200" />
              <h3 className="font-medium text-gray-900 mb-1">Submit Project</h3>
              <p className="text-sm text-gray-600">Upload your hackathon project</p>
            </Link>
            
            <Link
              href="/dashboard/profile"
              className="p-4 border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-all duration-200 group"
            >
              <FiUser className="w-6 h-6 text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-200" />
              <h3 className="font-medium text-gray-900 mb-1">Edit Profile</h3>
              <p className="text-sm text-gray-600">Update your information</p>
            </Link>
            
            <Link
              href="/#timeline"
              className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-all duration-200 group"
            >
              <FiCalendar className="w-6 h-6 text-green-600 mb-2 group-hover:scale-110 transition-transform duration-200" />
              <h3 className="font-medium text-gray-900 mb-1">Event Timeline</h3>
              <p className="text-sm text-gray-600">Check hackathon schedule</p>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}