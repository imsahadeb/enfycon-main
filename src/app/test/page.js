import React from 'react';

export default function TestPage() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                    <div className="md:shrink-0">
                        <div className="h-48 w-full md:h-full md:w-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                            <span className="text-white text-4xl font-bold">TW</span>
                        </div>
                    </div>
                    
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold text-left">System Check</div>
                        <h1 className="block mt-1 text-lg leading-tight font-medium text-black text-left hover:underline">
                            Tailwind CSS v4 Integration
                        </h1>
                        <p className="mt-2 text-slate-500 text-left">
                            If you can see this card with a gradient box, rounded corners, and styled text, then Tailwind CSS is configured correctly in your Next.js project!
                        </p>
                        <div className="mt-4 flex gap-3">
                            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors">
                                Primary Button
                            </button>
                            <button className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors">
                                Secondary
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
