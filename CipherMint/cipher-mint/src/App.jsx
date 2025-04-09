import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SunIcon, MoonIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

export default function App() {
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);
  const [theme, setTheme] = useState("light");


  useEffect(() => {
    document.body.className = theme === "dark" ? "dark" : "";
  }, [theme]);

  const generatePassword = () => {
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+{}|:<>?[];,.";
    let chars = letters;
    if (includeNumbers) chars += numbers;
    if (includeSymbols) chars += symbols;

    let pass = "";
    for (let i = 0; i < length; i++) {
      pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(pass);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getStrength = () => {
    if (length >= 16 && includeNumbers && includeSymbols) return "Very Strong";
    if (length >= 12 && includeNumbers && includeSymbols) return "Strong";
    if (length >= 8) return "Moderate";
    return "Weak";
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    generatePassword();
  }, [length, includeNumbers, includeSymbols]);

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 transition-colors duration-500 relative overflow-hidden font-sans ${
        theme === "dark" ? "text-white" : "text-gray-900"
      }`}
      style={{
        background:
          theme === "dark"
            ? "radial-gradient(ellipse at center, #1e1e2f 0%, #11111b 100%)"
            : "radial-gradient(circle at top left, #fceabb, #f8b500)",
      }}
    >
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-10"
          style={{
            width: 100,
            height: 100,
            background: theme === "dark" ? "#00f2ff" : "#ff4ecd",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 5 + Math.random() * 5, ease: "easeInOut" }}
        />
      ))}

      <motion.div drag dragConstraints={{top:-200, right:450, left:-450, bottom:200}} whileDrag={{scale:1.2}} dragElastic={0.2}  
       className="relative z-10 w-full max-w-xl p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold uppercase tracking-wide">Password Generator</h1>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
          >
            {theme === "light" ? (
              <MoonIcon className="w-5 h-5 text-gray-800" />
            ) : (
              <SunIcon className="w-5 h-5 text-yellow-300" />
            )}
          </motion.button>
        </div>

        <motion.div
          key={password}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center space-x-2 mb-4"
        >
          <input
            type="text"
            value={password}
            readOnly
            className="w-full px-3 py-2 rounded-md border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white bg-white/20 backdrop-blur-md"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={copyToClipboard}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Copy
          </motion.button>
        </motion.div>

        <AnimatePresence>
          {copied && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-green-500 text-sm mb-4"
            >
              Copied to clipboard!
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mb-4">
          <label className="block text-sm mb-1">Password Length: {length}</label>
          <input
            type="range"
            min="4"
            max="32"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
            className="w-full accent-blue-500"
          />
        </div>

        <div className="flex justify-between items-center mb-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
              className="accent-blue-500"
            />
            <CheckCircleIcon className="w-4 h-4 text-blue-500" />
            <span>Include Numbers</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
              className="accent-pink-500"
            />
            <CheckCircleIcon className="w-4 h-4 text-pink-500" />
            <span>Include Symbols</span>
          </label>
        </div>

        <div className="text-sm font-semibold mb-2">
          Strength: <span className="text-blue-600 dark:text-blue-400">{getStrength()}</span>
        </div>

        <div className="w-full h-2 bg-gray-300 dark:bg-gray-600 rounded-full overflow-hidden">
          <div
            className={`h-full transition-all duration-500 ${
              getStrength() === "Very Strong"
                ? "bg-green-500 w-full"
                : getStrength() === "Strong"
                ? "bg-yellow-400 w-3/4"
                : getStrength() === "Moderate"
                ? "bg-orange-400 w-1/2"
                : "bg-red-500 w-1/4"
            }`}
          ></div>
        </div>
      </motion.div>
    </div>
  );
}