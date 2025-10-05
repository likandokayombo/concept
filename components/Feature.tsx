"use client";

import { useEffect, useState } from "react";

interface LocationData {
  city?: string;
  time?: string;
  day?: string;
}

export default function Feature() {
  const [locationData, setLocationData] = useState<LocationData>({});
  const [greeting, setGreeting] = useState("Hello, Creator ");

  useEffect(() => {
    let timezone: string | undefined;

    // Function to update greeting and time
    function updateGreetingAndTime() {
      const now = new Date();
      const hour = now.getHours();

      if (hour < 12) setGreeting("Good morning ");
      else if (hour < 18) setGreeting("Good afternoon ");
      else setGreeting("Good evening ");

      if (timezone) {
        const timeString = now.toLocaleString("en-US", {
          timeZone: timezone,
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        });

        const dayString = now.toLocaleDateString("en-US", {
          weekday: "long",
          timeZone: timezone,
        });

        setLocationData((prev) => ({
          ...prev,
          time: timeString,
          day: dayString,
        }));
      }
    }

    // Fetch user location
    async function fetchLocation() {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();

        timezone = data.timezone;

        setLocationData({
          city: data.city,
          time: "",
          day: "",
        });

        updateGreetingAndTime();

        // Update time every minute
        const interval = setInterval(updateGreetingAndTime, 60 * 1000);
        return () => clearInterval(interval);
      } catch (err) {
        console.error("Error fetching location:", err);
      }
    }

    fetchLocation();
  }, []);

  return (
    <section className="text-center py-10 bg-white border-t border-gray-200">
      <h2 className="text-2xl font-jetbrains text-gray-800 mb-2">{greeting}</h2>
      {locationData.city && locationData.time ? (
        <p className="text-gray-600">
          It’s <span className="font-medium">{locationData.day}</span>,{" "}
          <span className="font-medium">{locationData.time}</span> in{" "}
          <span className="font-medium">{locationData.city}</span>.
        </p>
      ) : (
        <p className="text-gray-600">Fetching your location and time...</p>
      )}
    </section>
  );
}
