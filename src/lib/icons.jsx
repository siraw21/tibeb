import {
  Code2, Cpu, Briefcase, Languages, Target, Dumbbell, Sprout, Timer,
  Rocket, Flame, Sunrise, Trophy, Users, TrendingUp, BarChart3, Wallet,
  Settings, LayoutDashboard, CalendarDays, MessageSquare, Award, User,
  CheckCircle2, Circle, Bell, ChevronRight, ChevronDown, ChevronLeft,
  Search, X, Menu, Play, Star, Video, ExternalLink, Plus, ArrowRight,
  ArrowLeft, Sparkles, ShieldCheck, Heart, MessageCircle, Upload,
  Clock, MapPin, LogOut, Filter, GraduationCap, BookOpen,
} from 'lucide-react'

export const ICONS = {
  Code2, Cpu, Briefcase, Languages, Target, Dumbbell, Sprout, Timer,
  Rocket, Flame, Sunrise, Trophy, Users, TrendingUp, BarChart3, Wallet,
  Settings, LayoutDashboard, CalendarDays, MessageSquare, Award, User,
  CheckCircle2, Circle, Bell, ChevronRight, ChevronDown, ChevronLeft,
  Search, X, Menu, Play, Star, Video, ExternalLink, Plus, ArrowRight,
  ArrowLeft, Sparkles, ShieldCheck, Heart, MessageCircle, Upload,
  Clock, MapPin, LogOut, Filter, GraduationCap, BookOpen,
}

export function Icon({ name, className, ...props }) {
  const Cmp = ICONS[name] || Circle
  return <Cmp className={className} {...props} />
}
