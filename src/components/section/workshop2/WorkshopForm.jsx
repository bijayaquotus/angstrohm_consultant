import React, { useState } from 'react';
import { PlusCircle, MinusCircle } from 'lucide-react';

const emptyAttendee = { firstName: '', lastName: '', email: '', phone: '' };

export default function WorkshopForm() {
  const [registrationType, setRegistrationType] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [attendees, setAttendees] = useState([{ ...emptyAttendee }]);

  const handleAttendeeChange = (index, field) => (e) => {
    setAttendees((prev) =>
      prev.map((attendee, i) =>
        i === index ? { ...attendee, [field]: e.target.value } : attendee
      )
    );
  };

  const addAttendee = () => {
    setAttendees((prev) => [...prev, { ...emptyAttendee }]);
  };

  const removeAttendee = () => {
    setAttendees((prev) => (prev.length > 1 ? prev.slice(0, -1) : prev));
  };

  const handleTypeChange = (value) => {
    setRegistrationType(value);
    // Reset to a single blank attendee whenever the type changes so
    // switching between Individual and Company doesn't carry over
    // multi-attendee rows that only make sense for Company.
    setAttendees([{ ...emptyAttendee }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload =
      registrationType === 'Company'
        ? { registrationType, companyName, attendees }
        : { registrationType, ...attendees[0], companyName };

    // Wire this up to your existing registration handler / API endpoint.
    console.log('Workshop registration:', payload);
  };

  const inputClass =
    'w-full bg-white border border-slate-300 rounded px-4 py-2.5 text-slate-800 text-sm focus:outline-none focus:border-[#c8264f] transition-colors';

  return (
    <section className="relative bg-[#ececec] px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-[#c8264f] text-3xl sm:text-4xl font-bold mb-10 text-center sm:text-left">
          Join the Goal Achievement Workshop
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Individual / Company selector */}
          <div>
            <p className="text-[#c8264f] font-semibold mb-3">
              Select <span className="text-[#c8264f]">*</span>
            </p>
            <div className="space-y-2">
              <label className="flex items-center gap-3 text-slate-700 cursor-pointer">
                <input
                  type="radio"
                  name="registrationType"
                  value="Individual"
                  checked={registrationType === 'Individual'}
                  onChange={() => handleTypeChange('Individual')}
                  className="w-4 h-4 accent-[#c8264f]"
                  required
                />
                Individual
              </label>
              <label className="flex items-center gap-3 text-slate-700 cursor-pointer">
                <input
                  type="radio"
                  name="registrationType"
                  value="Company"
                  checked={registrationType === 'Company'}
                  onChange={() => handleTypeChange('Company')}
                  className="w-4 h-4 accent-[#c8264f]"
                />
                Company
              </label>
            </div>
          </div>

          {/* Company name field — sits at the TOP, only for Company */}
          {registrationType === 'Company' && (
            <div>
              <label className="block text-[#c8264f] font-semibold mb-2">
                Company
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className={inputClass}
                required
              />
            </div>
          )}

          {/* Attendee blocks — one for Individual, one-or-more for Company */}
          {registrationType && (
            <div className="space-y-8">
              {attendees.map((attendee, index) => (
                <div
                  key={index}
                  className={
                    registrationType === 'Company' && attendees.length > 1
                      ? 'border-t border-slate-300 pt-6 first:border-t-0 first:pt-0'
                      : ''
                  }
                >
                  {registrationType === 'Company' && attendees.length > 1 && (
                    <p className="text-slate-500 text-xs font-semibold uppercase tracking-wide mb-3">
                      Attendee {index + 1}
                    </p>
                  )}

                  <div className="mb-4">
                    <label className="block text-[#c8264f] font-semibold mb-2">
                      Name
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          value={attendee.firstName}
                          onChange={handleAttendeeChange(index, 'firstName')}
                          className={inputClass}
                          required
                        />
                        <p className="text-slate-400 text-xs mt-1">First</p>
                      </div>
                      <div>
                        <input
                          type="text"
                          value={attendee.lastName}
                          onChange={handleAttendeeChange(index, 'lastName')}
                          className={inputClass}
                        />
                        <p className="text-slate-400 text-xs mt-1">Last</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#c8264f] font-semibold mb-2">
                        Email <span className="text-[#c8264f]">*</span>
                      </label>
                      <input
                        type="email"
                        value={attendee.email}
                        onChange={handleAttendeeChange(index, 'email')}
                        className={inputClass}
                        required
                      />
                    </div>
                    <div>
  <label className="block text-[#c8264f] font-semibold mb-2">
    Phone No. <span className="text-[#c8264f]">*</span>
  </label>
  <input
    type="tel"
    value={attendee.phone}
    onChange={(e) => {
      // Only allow digits
      const value = e.target.value.replace(/\D/g, '');
      handleAttendeeChange(index, 'phone')({ target: { value } });
    }}
    className={inputClass}
    required
    pattern="[0-9]*"
    inputMode="numeric"
    maxLength={15}
  />
</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Company Name field — only for Individual, sits at the BOTTOM */}
          {registrationType === 'Individual' && (
            <div>
              <label className="block text-[#c8264f] font-semibold mb-2">
                Company Name
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className={inputClass}
              />
            </div>
          )}

          {/* Add / Remove attendee — only for Company */}
          {registrationType === 'Company' && (
            <div className="flex gap-3">
              <button
                type="button"
                onClick={addAttendee}
                className="flex items-center gap-2 border border-[#c8264f] text-[#c8264f] font-semibold text-sm px-4 py-2 rounded hover:bg-[#c8264f] hover:text-white transition-colors"
              >
                <PlusCircle className="w-4 h-4" />
                Add
              </button>
              <button
                type="button"
                onClick={removeAttendee}
                disabled={attendees.length <= 1}
                className="flex items-center gap-2 border border-[#c8264f] text-[#c8264f] font-semibold text-sm px-4 py-2 rounded hover:bg-[#c8264f] hover:text-white transition-colors disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-[#c8264f] disabled:cursor-not-allowed"
              >
                <MinusCircle className="w-4 h-4" />
                Remove
              </button>
            </div>
          )}

          <button
            type="submit"
            className="bg-[#c8264f] hover:bg-[#b01e42] text-white font-semibold px-8 py-2.5 rounded transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}