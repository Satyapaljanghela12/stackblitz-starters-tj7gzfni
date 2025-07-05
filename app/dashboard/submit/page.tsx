'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiGithub, FiExternalLink, FiVideo, FiUsers, FiCode } from 'react-icons/fi';
import toast, { Toaster } from 'react-hot-toast';

export default function SubmitPage() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    githubLink: '',
    demoVideoLink: '',
    liveLink: '',
    teamMembers: [''],
    technologies: ['']
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [existingSubmission, setExistingSubmission] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/auth/login');
      return;
    }

    fetchExistingSubmission();
  }, [router]);

  const fetchExistingSubmission = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('/api/submission', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        if (data.submission) {
          setExistingSubmission(data.submission);
          setIsEditing(true);
          setFormData({
            title: data.submission.title || '',
            description: data.submission.description || '',
            githubLink: data.submission.githubLink || '',
            demoVideoLink: data.submission.demoVideoLink || '',
            liveLink: data.submission.liveLink || '',
            teamMembers: data.submission.teamMembers?.length > 0 ? data.submission.teamMembers : [''],
            technologies: data.submission.technologies?.length > 0 ? data.submission.technologies : ['']
          });
        }
      }
    } catch (error) {
      console.error('Error fetching submission:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleArrayChange = (index: number, value: string, field: 'teamMembers' | 'technologies') => {
    const newArray = [...formData[field]];
    newArray[index] = value;
    setFormData({
      ...formData,
      [field]: newArray
    });
  };

  const addArrayItem = (field: 'teamMembers' | 'technologies') => {
    setFormData({
      ...formData,
      [field]: [...formData[field], '']
    });
  };

  const removeArrayItem = (index: number, field: 'teamMembers' | 'technologies') => {
    if (formData[field].length > 1) {
      const newArray = formData[field].filter((_, i) => i !== index);
      setFormData({
        ...formData,
        [field]: newArray
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const token = localStorage.getItem('token');
      const method = isEditing ? 'PUT' : 'POST';
      
      const response = await fetch('/api/submission', {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...formData,
          teamMembers: formData.teamMembers.filter(member => member.trim() !== ''),
          technologies: formData.technologies.filter(tech => tech.trim() !== '')
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(isEditing ? 'Project updated successfully!' : 'Project submitted successfully!');
        router.push('/dashboard');
      } else {
        toast.error(data.error || 'Submission failed');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link
              href="/dashboard"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <FiArrowLeft className="w-5 h-5" />
              <span>Back to Dashboard</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {isEditing ? 'Update Your Project' : 'Submit Your Project'}
          </h1>
          <p className="text-gray-600">
            {isEditing 
              ? 'Update your hackathon project details below.'
              : 'Share your amazing web application with the world!'
            }
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-xl shadow-sm p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Project Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Project Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your project title"
              />
            </div>

            {/* Project Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Project Description *
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={5}
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-vertical"
                placeholder="Describe your project, its features, and what makes it special..."
              />
            </div>

            {/* GitHub Link */}
            <div>
              <label htmlFor="githubLink" className="block text-sm font-medium text-gray-700 mb-2">
                GitHub Repository *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiGithub className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="url"
                  id="githubLink"
                  name="githubLink"
                  required
                  value={formData.githubLink}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="https://github.com/username/project"
                />
              </div>
            </div>

            {/* Live Demo Link */}
            <div>
              <label htmlFor="liveLink" className="block text-sm font-medium text-gray-700 mb-2">
                Live Demo URL (Optional)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiExternalLink className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="url"
                  id="liveLink"
                  name="liveLink"
                  value={formData.liveLink}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="https://your-project-demo.com"
                />
              </div>
            </div>

            {/* Demo Video Link */}
            <div>
              <label htmlFor="demoVideoLink" className="block text-sm font-medium text-gray-700 mb-2">
                Demo Video URL (Optional)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiVideo className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="url"
                  id="demoVideoLink"
                  name="demoVideoLink"
                  value={formData.demoVideoLink}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="https://youtube.com/watch?v=..."
                />
              </div>
            </div>

            {/* Team Members */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Team Members (Optional)
              </label>
              <div className="space-y-3">
                {formData.teamMembers.map((member, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="relative flex-1">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiUsers className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        value={member}
                        onChange={(e) => handleArrayChange(index, e.target.value, 'teamMembers')}
                        className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Team member name"
                      />
                    </div>
                    {formData.teamMembers.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeArrayItem(index, 'teamMembers')}
                        className="px-3 py-3 text-red-600 hover:text-red-700 transition-colors duration-200"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addArrayItem('teamMembers')}
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-200"
                >
                  + Add Team Member
                </button>
              </div>
            </div>

            {/* Technologies */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Technologies Used (Optional)
              </label>
              <div className="space-y-3">
                {formData.technologies.map((tech, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="relative flex-1">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiCode className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        value={tech}
                        onChange={(e) => handleArrayChange(index, e.target.value, 'technologies')}
                        className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="e.g., React, Node.js, MongoDB"
                      />
                    </div>
                    {formData.technologies.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeArrayItem(index, 'technologies')}
                        className="px-3 py-3 text-red-600 hover:text-red-700 transition-colors duration-200"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addArrayItem('technologies')}
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-200"
                >
                  + Add Technology
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-between pt-6 border-t border-gray-200">
              <Link
                href="/dashboard"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Cancel
              </Link>
              <button
                type="submit"
                disabled={isLoading}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center space-x-2"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>{isEditing ? 'Updating...' : 'Submitting...'}</span>
                  </>
                ) : (
                  <span>{isEditing ? 'Update Project' : 'Submit Project'}</span>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}