# NexusBill - Comprehensive System Documentation

Welcome to the official documentation for **NexusBill**, a complete, automated Internet Service Provider (ISP) Billing & Management Web Application. This document is structured like a book to help you understand exactly how the system works, what each option does, and the underlying logic of the software.

---

## 📖 Table of Contents
1. [System Overview](#1-system-overview)
2. [User Roles & Permissions](#2-user-roles--permissions)
3. [Core Modules Explained](#3-core-modules-explained)
   - Dashboard
   - Customers Module
   - MikroTik & Network Module
   - Billing & Finance
   - Support Tickets
4. [How Automated Billing Works](#4-how-automated-billing-works)
5. [bKash Auto-Payment Workflow](#5-bkash-auto-payment-workflow)
6. [Technical Architecture](#6-technical-architecture)

---

## 1. System Overview
NexusBill is designed to replace manual ISP management (like Excel sheets or raw Winbox usage). It acts as a bridge between your database and the physical MikroTik router. When an action is performed in the web app (like recharging a user), the software automatically logs the payment, calculates the exact expiry date, and sends an API command to the MikroTik router to enable the user's internet.

---

## 2. User Roles & Permissions
The system is built on a strict Role-Based Access Control (RBAC) architecture. 

*   **Super Admin:** Has absolute control over the entire system. Can create other Admins, configure system-wide settings, and view global revenue.
*   **Admin:** Manages the main ISP operation. Can add routers, create packages, manage all customers, and view financial reports.
*   **Reseller:** A sub-isp who buys bandwidth/packages from the Admin. They have their own wallet balance. When a Reseller recharges a customer, the money is deducted from their wallet. They can only see their own customers.
*   **Employee / Lineman:** Limited access. Can view customer addresses and connection status to provide field support, but cannot change billing configurations or delete users.
*   **Customer:** End-users. They have a self-service portal to view their active package, check their expiry date, and pay their bill online via bKash.

---

## 3. Core Modules Explained

### 📊 Dashboard
*   **Total Active/Offline Users:** Fetches live data to show how many PPPoE users are currently connected to the router.
*   **Revenue Charts:** Displays daily and monthly revenue collection.
*   **Recent Activity:** A quick log of who paid recently or which tickets were opened.

### 👥 Customers Module
This is the heart of the system.
*   **Add Customer:** When adding a customer, you assign them a Package (e.g., 5 Mbps) and a PPPoE Username/Password. The system automatically creates this PPPoE user inside the MikroTik router.
*   **Recharge (Manual):** Admins or Resellers can manually recharge a user. 
    *   *Logic:* You select the Base Date. The system exactly calculates `+30 days` and sets the expiry time to `23:59 (11:59 PM)`.
    *   *Renew Back:* If a customer was supposed to pay on the 1st but pays on the 5th, checking "Renew Back" will start their 30 days from the 1st, preventing revenue loss.
*   **Kick (Disconnect):** Temporarily kicks the active PPPoE session from the router, forcing their home router to reconnect. Useful for troubleshooting.
*   **Suspend:** Manually disables the user in the database and disables their PPPoE account in MikroTik. They will lose internet access immediately.

### 🌐 MikroTik & Network Module
*   **Router Configuration:** Connect the web app to your physical router using the Router's IP, API Port, Username, and Password.
*   **Sync Customers:** If you already have users in your router, this button pulls them into the web app's database.
*   **IP Pools & Profiles:** Automatically syncs PPPoE profiles from the router so you can assign them to billing packages.

### 💰 Billing & Finance
*   **Packages:** Define internet speeds and prices. (e.g., 10 Mbps = ৳1000). These are linked to MikroTik profiles.
*   **Invoices:** Every time a user is recharged, a paid invoice is generated. If a user expires, an unpaid invoice is generated.
*   **Reseller Wallet:** Admins can "Add Balance" to resellers. When a reseller recharges a ৳500 package, ৳500 is subtracted from their wallet.

### 🎫 Support Tickets
Customers can open a complaint (e.g., "Speed is slow" or "Cable Cut") from their dashboard. Employees and Admins can reply, update the status to "In Progress" or "Resolved".

---

## 4. How Automated Billing Works (Cron Jobs)
You don't have to manually check who didn't pay. Here is the automated workflow:

1.  Every night at `12:00 AM (Midnight)`, a hidden system script (Cron Job) wakes up.
2.  It scans the database for all customers whose `expireDate` has passed.
3.  For every expired customer, the system changes their database status to **Expired**.
4.  It immediately sends an API request to the MikroTik router to **Disable** their PPPoE account. The customer's internet instantly stops working.
5.  It generates an "Unpaid" invoice and sends an automated SMS to the customer: *"Your internet has been suspended due to unpaid bills."*

---

## 5. bKash Auto-Payment Workflow
When a customer logs into their portal and clicks "Pay Bill":
1.  The system redirects them to the secure bKash payment gateway.
2.  The customer enters their PIN and completes the payment.
3.  bKash sends a "Success" signal back to our web app.
4.  The system automatically:
    *   Adds exactly 30 days to their expiry date (ending at 11:59 PM).
    *   Generates a Paid Receipt.
    *   Sends a command to MikroTik to **Enable** their PPPoE connection.
    *   Sends a Thank You SMS to the customer.
*All of this happens in 2-3 seconds without Admin intervention.*

---

## 6. Technical Architecture
For developers and IT administrators:
*   **Timezone Logic:** The VPS operates strictly in the `Asia/Dhaka` (+06:00) timezone to ensure all mid-night cron jobs and expiry dates align with Bangladesh Standard Time.
*   **Database:** Powered by PostgreSQL. We use strict relational constraints to ensure a payment cannot be created without a valid customer ID.
*   **API Security:** All routes to the MikroTik router are secured behind backend APIs. The physical router's credentials are never exposed to the frontend browser. 

---
*End of Documentation.*
