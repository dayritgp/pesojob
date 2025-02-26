"use client";

import { useEffect, useState } from "react";
import { FiBell, FiClock, FiMapPin, FiDollarSign, FiBriefcase } from "react-icons/fi";

interface Notification {
  id: number;
  job_position: string;
  job_location: string;
  salary: string;
  job_type: string;
  skill_level: string;
  job_description: string;
  requirements: string;
  created_at: string;
}

const Notifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const response = await fetch("/api/notifications");
      if (!response.ok) throw new Error("Failed to fetch notifications");
      const data: Notification[] = await response.json();
      setNotifications(data);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ml-64 p-6">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <FiBell className="text-blue-500" /> Notifications
      </h2>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {loading ? (
          <p className="text-gray-500 p-4">Loading...</p>
        ) : error ? (
          <p className="text-red-500 p-4">{error}</p>
        ) : notifications.length > 0 ? (
          <ul>
            {notifications.map((notif) => (
              <li
                key={notif.id}
                className="p-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer transition duration-200"
              >
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold">{notif.job_position}</span>
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <FiMapPin className="text-gray-400" />
                      {notif.job_location}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 flex items-center gap-2">
                    <FiClock className="text-gray-400" />
                    {new Date(notif.created_at).toLocaleDateString()}
                  </div>
                </div>

                <div className="mt-2 flex items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <FiBriefcase className="text-gray-400" /> {notif.job_type}
                  </span>
                  <span className="flex items-center gap-1">
                    <FiDollarSign className="text-gray-400" /> {notif.salary}
                  </span>
                  <span className="text-gray-500">{notif.skill_level}</span>
                </div>

                <p className="mt-2 text-sm text-gray-700">{notif.job_description}</p>

                <p className="mt-1 text-sm text-gray-500">Requirements: {notif.requirements}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-center p-4">No notifications</p>
        )}
      </div>
    </div>
  );
};

export default Notifications;
