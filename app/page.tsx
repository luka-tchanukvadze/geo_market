"use client";
import Slider from "@/componenets/Slider";
import { useEffect, useState } from "react";

export default function Home() {
  const storedDarkMode = localStorage.getItem("darkMode");
  const [darkMode, setDarkMode] = useState(
    storedDarkMode ? JSON.parse(storedDarkMode) : false
  );

  // Update local storage when dark mode changes
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className={` ${darkMode ? "dark" : ""} `}>
      <div className="bg-white dark:bg-black">
        <header className="bg-blue-600 dark:bg-purple-600 text-white dark:text-white p-6 shadow-lg">
          <div className="container mx-auto text-center md:text-left">
            <h1 className="text-4xl font-extrabold">Small Market</h1>
            <p className="mt-2">
              Contact: 123 Market Street, City, Country | Phone: (123) 456-7890
              | Email: info@smallmarket.com
            </p>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="mt-4 px-4 py-2 bg-gray-900 text-white dark:bg-gray-300 dark:text-black rounded"
            >
              Toggle Dark Mode
            </button>
          </div>
        </header>

        <main className="bg-white dark:bg-gray-900 text-black dark:text-white container mx-auto my-12 space-y-12 p-4 md:p-0 rounded-lg shadow-lg">
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-3xl font-semibold mb-4 text-center">
              Introduction
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Welcome to Small Market! Our mission is to provide high-quality
              products at affordable prices while offering excellent customer
              service and fostering a friendly community atmosphere.
            </p>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-3xl font-semibold mb-4 text-center">
              Photo Slider
            </h2>
            <Slider />
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-3xl font-semibold mb-4 text-center">
              Employee Roles and Responsibilities
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold">Management</h3>
                <ul className="list-disc list-inside ml-4 mt-2 text-gray-700 dark:text-gray-300">
                  <li>
                    <strong>Store Manager</strong>: Oversees overall operations,
                    manages staff, handles customer complaints, maintains
                    inventory, and ensures the store meets financial goals.
                  </li>
                  <li>
                    <strong>Assistant Manager</strong>: Supports the store
                    manager, supervises staff, assists with scheduling, and
                    manages day-to-day activities.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold">
                  Sales and Customer Service
                </h3>
                <ul className="list-disc list-inside ml-4 mt-2 text-gray-700 dark:text-gray-300">
                  <li>
                    <strong>Cashier</strong>: Handles transactions, processes
                    payments, provides customer service, and maintains the
                    checkout area.
                  </li>
                  <li>
                    <strong>Customer Service Representative</strong>: Assists
                    customers with inquiries, helps resolve issues, and provides
                    information about products and services.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold">Stock and Inventory</h3>
                <ul className="list-disc list-inside ml-4 mt-2 text-gray-700 dark:text-gray-300">
                  <li>
                    <strong>Stock Clerk</strong>: Receives and organizes
                    inventory, stocks shelves, maintains stock levels, and
                    ensures products are correctly priced.
                  </li>
                  <li>
                    <strong>Inventory Manager</strong>: Monitors inventory
                    levels, orders new stock, manages stockroom, and conducts
                    regular inventory audits.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold">
                  Maintenance and Cleaning
                </h3>
                <ul className="list-disc list-inside ml-4 mt-2 text-gray-700 dark:text-gray-300">
                  <li>
                    <strong>Janitor/Cleaning Staff</strong>: Keeps the store
                    clean and sanitary, handles waste management, and ensures
                    all areas are well-maintained.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-3xl font-semibold mb-4 text-center">
              Key Policies and Procedures
            </h2>
            <ul className="list-disc list-inside ml-4 text-gray-700 dark:text-gray-300">
              <li>
                <strong>Customer Service Policy</strong>: Guidelines for
                interacting with customers, handling complaints, and ensuring a
                positive shopping experience.
              </li>
              <li>
                <strong>Safety Procedures</strong>: Health and safety
                regulations, emergency protocols, and employee responsibilities
                in maintaining a safe environment.
              </li>
              <li>
                <strong>Employee Conduct</strong>: Code of conduct, dress code,
                and behavioral expectations.
              </li>
            </ul>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-3xl font-semibold mb-4 text-center">
              Contact Information for Staff
            </h2>
            <ul className="list-disc list-inside ml-4 text-gray-700 dark:text-gray-300">
              <li>
                <strong>Key Contacts</strong>:
                <ul className="mt-2 ml-4">
                  <li>Store Manager: John Doe - john.doe@smallmarket.com</li>
                  <li>
                    Assistant Manager: Jane Smith - jane.smith@smallmarket.com
                  </li>
                  <li>
                    Inventory Manager: Alice Johnson -
                    alice.johnson@smallmarket.com
                  </li>
                </ul>
              </li>
            </ul>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-3xl font-semibold mb-4 text-center">
              Important Dates and Schedules
            </h2>
            <ul className="list-disc list-inside ml-4 text-gray-700 dark:text-gray-300">
              <li>
                <strong>Store Hours</strong>:
                <ul className="mt-2 ml-4">
                  <li>Monday - Friday: 8:00 AM - 8:00 PM</li>
                  <li>Saturday: 9:00 AM - 6:00 PM</li>
                  <li>Sunday: 10:00 AM - 4:00 PM</li>
                </ul>
              </li>
              <li className="mt-2">
                <strong>Shift Schedules</strong>: Overview of employee shifts
                and key work hours.
              </li>
              <li
                className="
mt-2"
              >
                <strong>Meeting and Training Sessions</strong>: Dates and times
                for staff meetings and training sessions.
              </li>
            </ul>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-3xl font-semibold mb-4 text-center">
              Additional Information
            </h2>
            <ul className="list-disc list-inside ml-4 text-gray-700 dark:text-gray-300">
              <li>
                <strong>Employee Benefits</strong>: Brief overview of employee
                benefits (e.g., discounts, health benefits, vacation policy).
              </li>
              <li className="mt-2">
                <strong>Career Development</strong>: Opportunities for
                advancement, training programs, and professional development
                resources.
              </li>
            </ul>
          </section>
        </main>

        <footer className="bg-blue-600 dark:bg-purple-600 text-white dark:text-white p-6 mt-12 shadow-lg">
          <div className="container mx-auto text-center">
            <p>
              &copy; 2024 Small Market. All rights reserved. This document is
              proprietary and cannot be copied or distributed without
              permission.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
