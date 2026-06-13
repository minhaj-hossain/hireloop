import React, { useState } from "react";
import { Xmark, Pin, ArrowDownToSquare, ChevronDown } from "@gravity-ui/icons";
import { FiLink2 } from "react-icons/fi";
import { createCompany } from "@/lib/actions/companies";

export default function RegisterCompanyModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    category: "Technology",
    website: "",
    location: "",
    range: "1-10 employees",
    image: "",
    description: "",
  });

  // 2. CONDITIONAL EARLY RETURNS GO AFTER ALL HOOKS
  if (!isOpen) return null;

  // 3. YOUR FUNCTIONS AND FORM LOGIC
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const res = await fetch(
    //   `${process.env.NEXT_PUBLIC_BASE_URL}/api/company`,
    //   {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(formData),
    //   },
    // );
    // const data = await res.json();

    const result = await createCompany(formData);

    if (result.success) onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop Overlay Blur */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Main Modal Panel Box */}
      <div className="relative bg-[#141416] border border-zinc-800 rounded-2xl w-full max-w-155 overflow-hidden shadow-2xl flex flex-col animate-in fade-in zoom-in-95 duration-150">
        {/* Header Layout Section */}
        <div className="p-6 border-b border-zinc-900 flex items-start justify-between">
          <div>
            <h2 className="text-lg font-bold text-white tracking-tight">
              Register New Company
            </h2>
            <p className="text-xs text-zinc-500 mt-1">
              Enter your business details to start hiring on HireLoop.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-zinc-500 hover:text-white p-1 rounded-lg transition-colors"
          >
            <Xmark className="h-4 w-4" />
          </button>
        </div>

        {/* Form Body Fields Context Container */}
        <form onSubmit={handleSubmit} className="flex-1">
          <div className="p-6 space-y-5 text-sm">
            {/* Row 1: Company Name & Industry */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-zinc-400">
                  Company Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. Acme Corp"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#1c1c1e]/60 border border-zinc-800/80 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-hidden focus:border-zinc-700 transition-colors"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-semibold text-zinc-400">
                  Industry / Category
                </label>
                <div className="relative">
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full bg-[#1c1c1e]/60 border border-zinc-800/80 rounded-xl px-4 py-3 text-white appearance-none focus:outline-hidden focus:border-zinc-700 transition-colors cursor-pointer"
                  >
                    <option value="Technology">Technology</option>
                    <option value="Design">Design</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Finance">Finance</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Row 2: Website URL & Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-zinc-400">
                  Website URL
                </label>
                <div className="flex rounded-xl bg-[#1c1c1e]/60 border border-zinc-800/80 focus-within:border-zinc-700 overflow-hidden transition-colors">
                  <span className="bg-[#18181b]/60 px-3 py-3 text-zinc-500 border-r border-zinc-800/60 select-none">
                    https://
                  </span>
                  <input
                    type="text"
                    name="website"
                    placeholder="www.company.com"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full bg-transparent px-3 py-3 text-white placeholder-zinc-600 focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-semibold text-zinc-400">
                  Location
                </label>
                <div className="relative flex items-center">
                  <Pin className="absolute left-4 h-4 w-4 text-zinc-500 pointer-events-none" />
                  <input
                    type="text"
                    name="location"
                    placeholder="City, Country"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full bg-[#1c1c1e]/60 border border-zinc-800/80 rounded-xl pl-11 pr-4 py-3 text-white placeholder-zinc-600 focus:outline-hidden focus:border-zinc-700 transition-colors"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Row 3: Employee Range & Logo Upload Box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-zinc-400">
                  Employee Count Range
                </label>
                <div className="relative">
                  <select
                    name="range"
                    value={formData.range}
                    onChange={handleChange}
                    className="w-full bg-[#1c1c1e]/60 border border-zinc-800/80 rounded-xl px-4 py-3 text-white appearance-none focus:outline-hidden focus:border-zinc-700 transition-colors cursor-pointer"
                  >
                    <option value="1-10 employees">1-10 employees</option>
                    <option value="11-50 employees">11-50 employees</option>
                    <option value="51-200 employees">51-200 employees</option>
                    <option value="201-500 employees">201-500 employees</option>
                    <option value="501-1000 employees">
                      501-1000 employees
                    </option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-semibold text-zinc-400">
                  Company Logo URL
                </label>
                <div className="flex items-center gap-2 bg-transparent border border-zinc-800 rounded-xl p-2 focus-within:border-zinc-700">
                  <div className="w-10 h-10 rounded-lg bg-[#1c1c1e]/60 border border-zinc-800 flex items-center justify-center text-zinc-400">
                    <FiLink2 className="h-4 w-4" />{" "}
                    {/* Swap with Link2, Link, or Globe icon */}
                  </div>
                  <input
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    type="url"
                    placeholder="https://example.com/logo.png"
                    className="w-full bg-transparent text-xs text-zinc-300 placeholder-zinc-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* <div className="space-y-2">
                <label className="block text-xs font-semibold text-zinc-400">Company Logo</label>
                <label className="flex items-center gap-3 bg-transparent border border-dashed border-zinc-800 hover:border-zinc-700 rounded-xl p-2 cursor-pointer transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-[#1c1c1e]/60 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
                    <ArrowDownToSquare className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-bold text-zinc-300 group-hover:text-white transition-colors">Upload image</span>
                    <span className="text-[10px] text-zinc-500 mt-0.5">PNG, JPG up to 5MB</span>
                  </div>
                  <input type="file" accept="image/*" className="hidden" />
                </label>
              </div>*/}
            </div>
            {/* Row 4: Brief Description Paragraph Area */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-zinc-400">
                Brief Description
              </label>
              <textarea
                name="description"
                rows={4}
                placeholder="Tell us about your company's mission and culture..."
                value={formData.description}
                onChange={handleChange}
                className="w-full bg-[#1c1c1e]/60 border border-zinc-800/80 rounded-xl p-4 text-white placeholder-zinc-600 focus:outline-hidden focus:border-zinc-700 transition-colors resize-none"
              />
            </div>
          </div>

          {/* Action Control Button Footer Pane */}
          <div className="p-4 bg-[#141416] border-t border-zinc-900 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-zinc-800/80 text-xs font-semibold text-zinc-300 hover:bg-[#1a1a1e] hover:text-white transition-all active:scale-98"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-white text-zinc-950 text-xs font-bold hover:bg-zinc-200 transition-all active:scale-98"
            >
              Register Company
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
