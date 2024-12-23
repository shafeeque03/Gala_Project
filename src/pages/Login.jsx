import React, { useState } from 'react';
import { 
  Lock, 
  Mail, 
  User, 
  Sparkles, 
  Rocket, 
  ShieldCheck,
  LogIn,
  UserPlus 
} from 'lucide-react';
import { adminLogin } from '../api/adminApi';
import toast from 'react-hot-toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [animate, setAnimate] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await adminLogin(email,password);
      if(res.status==200){
        toast.success(res.data.message)
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.response?.data?.message || 'ID or Password incorrect');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-black p-4 overflow-hidden">
      {/* Floating Animated Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className={`absolute top-10 right-20 opacity-20 animate-float ${animate ? 'animate-ping' : ''}`}>
          <Sparkles className="w-24 h-24 text-purple-300" />
        </div>
        <div className={`absolute bottom-20 left-10 opacity-20 animate-float ${animate ? 'animate-ping' : ''}`}>
          <Rocket className="w-20 h-20 text-blue-300" />
        </div>
      </div>

      {/* Login Container */}
      <div className="relative w-full max-w-md bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden">
        <div className="p-8 relative z-10">
          {/* Logo and Title */}
          <div className="text-center mb-8 flex flex-col items-center">
            <ShieldCheck 
              className="w-16 h-16 text-blue-400 mb-4 animate-pulse"
            />
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-2">
              Gala Developers
            </h1>
            <p className="text-white/70 text-sm">
              {isLogin 
                ? 'Secure Access to Your Development Hub' 
                : 'Join the Innovation Ecosystem'}
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="w-5 h-5 text-white/50 group-focus-within:text-blue-400 transition-colors" />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
              />
            </div>

            {/* Password Input */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock className="w-5 h-5 text-white/50 group-focus-within:text-blue-400 transition-colors" />
              </div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 active:scale-95 group"
            >
              {isLogin ? (
                <>
                  <LogIn className="w-5 h-5 group-hover:animate-bounce" />
                  Log In
                </>
              ) : (
                <>
                  <UserPlus className="w-5 h-5 group-hover:animate-bounce" />
                  Sign Up
                </>
              )}
            </button>
          </form>

          {/* Toggle Between Login/Signup */}
          <div className="text-center mt-6">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-white/70 hover:text-white transition-colors flex items-center justify-center gap-2 w-full"
            >
              {isLogin 
                ? 'Create a New Account' 
                : 'Already Have an Account?'}
              <User className="w-4 h-4 animate-pulse" />
            </button>
          </div>

          {/* Forgot Password */}
          <div className="text-center mt-4">
            <a 
              href="#" 
              className="text-sm text-white/50 hover:text-white transition-colors"
            >
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;