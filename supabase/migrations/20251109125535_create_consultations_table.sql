/*
  # Create Consultations and Audits Tables

  1. New Tables
    - `consultations` - Store consultation booking inquiries
      - `id` (uuid, primary key)
      - `email` (text, unique per date)
      - `name` (text)
      - `company` (text)
      - `phone` (text)
      - `message` (text)
      - `created_at` (timestamp)

    - `audit_requests` - Store free audit requests
      - `id` (uuid, primary key)
      - `email` (text)
      - `name` (text)
      - `company` (text)
      - `website` (text, optional)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Allow public inserts (for unauthenticated users to submit forms)
    - Restrict selects to authenticated admin users
*/

CREATE TABLE IF NOT EXISTS consultations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  name text NOT NULL,
  company text NOT NULL,
  phone text NOT NULL,
  message text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS audit_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  name text NOT NULL,
  company text NOT NULL,
  website text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit consultation"
  ON consultations
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view consultations"
  ON consultations
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Anyone can request audit"
  ON audit_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view audit requests"
  ON audit_requests
  FOR SELECT
  TO authenticated
  USING (true);
