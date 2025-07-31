import React from 'react'
import { Lock, Zap, Globe, Users, Palette, ShieldCheck, Star, Clock, ImageUp } from 'lucide-react'

const AuthImagePattern = ({ title, subtitle }) => {
    const features = [
        { icon: Lock, label: "Secure", color: "text-emerald-500" },
        { icon: Zap, label: "Fast", color: "text-yellow-500" },
        { icon: Globe, label: "Global", color: "text-blue-500" },
        { icon: Users, label: "Team", color: "text-indigo-500" },
        { icon: Palette, label: "Themes", color: "text-purple-500" },
        { icon: ShieldCheck, label: "Privacy", color: "text-slate-500" },
        { icon: Star, label: "Trusted", color: "text-amber-500" },
        { icon: Clock, label: "24/7", color: "text-teal-500" },
        { icon: ImageUp, label: "Images", color: "text-orange-500" }
    ];

    return (
        <div className='hidden lg:flex items-center justify-center bg-base-200 p-12'>
            <div className='max-w-md text-center'>
                <div className='grid grid-cols-3 gap-3 mb-8'>
                    {features.map(({ icon: Icon, label, color }, i) => (
                        <div
                            key={i}
                            className='aspect-square rounded-2xl bg-primary/10 flex flex-col items-center justify-center px-2 text-center hover:bg-primary/15 hover:scale-105 transition-all duration-200 cursor-pointer'
                        >
                            <Icon className={`w-8 h-8 mb-1 ${color}`} />
                            <span className={`text-xs font-medium ${color}`}>{label}</span>
                        </div>
                    ))}
                </div>
                <h2 className='text-2xl font-bold mb-4'>{title}</h2>
                <p className='text-base-content/60'>{subtitle}</p>
            </div>
        </div>
    )
}

export default AuthImagePattern