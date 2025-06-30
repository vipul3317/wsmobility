import React from 'react'

const BikeModels = ({ bikes }) => {
    return (
        <section className="min-h-screen bg-gray-200 pt-24">
            <div className="max-w-7xl mx-auto px-4 py-16 pt-12">
                {/* Header Section */}
                <div className="text-center mb-24">
                    <div className="inline-block p-2 bg-green-200 rounded-full mb-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-800 rounded-full flex items-center justify-center">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                    </div>
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-green-900 to-emerald-900 bg-clip-text text-transparent mb-4">
                        Our EV Bike Collection
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto font-semibold">
                        Experience the future of mobility with our premium electric bikes designed for performance, style, and sustainability.
                    </p>
                </div>

                {/* Bikes Grid */}
                <div className="space-y-20">
                    {bikes.map((bike, index) => (
                        <div key={index} className="group">
                            {/* Centered Bike Name */}
                            <div className="text-center mb-8">
                                <div className="inline-block mb-4">
                                    <span className="px-6 py-2 bg-gradient-to-r from-yellow-500 to-yellow-700 text-white rounded-full text-sm font-semibold">
                                        Model {index + 1}
                                    </span>
                                </div>
                                <h3 className="text-5xl font-serif font-bold text-gray-800 group-hover:text-green-700 transition-colors duration-300">
                                    {bike.name}
                                </h3>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                {/* Left: Content Section */}
                                <div className="space-y-6">

                                    {/* Specifications Card */}
                                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300">
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-700 rounded-lg flex items-center justify-center">
                                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                </svg>
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-800">Performance Specs</h4>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                            {bike.specifications && Object.entries(bike.specifications).map(([key, value], i) => (
                                                <div key={i} className="flex items-center gap-3 p-1 bg-gradient-to-r from-emerald-50 to-green-200 rounded-lg">
                                                    <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                                                    <div>
                                                        <span className="text-sm text-gray-600 capitalize">
                                                            {key.replace(/([A-Z])/g, ' $1').toLowerCase()}:
                                                        </span>
                                                        <span className="ml-2 font-semibold text-gray-800">{value}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Features Card */}
                                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300">
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-700 rounded-lg flex items-center justify-center">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-800">Key Features</h4>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                                            {bike.features && bike.features.map((feature, i) => (
                                                <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-gradient-to-r from-green-200 to-emerald-50 transition-colors duration-200">
                                                    <div className="w-5 h-5 bg-gradient-to-r from-green-500 to-emerald-700 rounded-full flex items-center justify-center flex-shrink-0">
                                                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </div>
                                                    <span className="text-gray-700 font-medium">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Right: Image Section */}
                                <div className="relative">
                                    <div className="relative group">
                                        {/* Decorative Background */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-200 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>

                                        {/* Image Container */}
                                        <div className="relative bg-white rounded-3xl p-8 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                                            <img
                                                src={bike.imageUrl || `/api/placeholder/500/400`}
                                                alt={bike.name}
                                                className="w-full h-80 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                                            />

                                            {/* Overlay Badge */}
                                            <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-700 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                                                ECO-FRIENDLY
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BikeModels