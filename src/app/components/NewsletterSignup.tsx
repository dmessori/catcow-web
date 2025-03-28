export default function NewsletterSignup() {
    return (
      <div className="p-6">
        <p>Sign up for our newsletter — all fam, no spam.</p>
        <div className="flex gap-2 mt-2">
          <input type="email" placeholder="Email" className="border px-3 py-2" />
          <button className="bg-black text-white px-4 py-2 rounded-full">Signup</button>
        </div>
      </div>
    );
  }
  