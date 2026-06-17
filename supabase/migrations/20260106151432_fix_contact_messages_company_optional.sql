/*
  # Fix Contact Messages Company Field

  1. Changes
    - Alter `contact_messages` table to make `company` field optional (nullable)
    - This allows users to submit the contact form without providing a company name
  
  2. Reason
    - The frontend form has the company field marked as optional
    - The database schema should match the frontend behavior
*/

DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_messages' 
    AND column_name = 'company' 
    AND is_nullable = 'NO'
  ) THEN
    ALTER TABLE contact_messages ALTER COLUMN company DROP NOT NULL;
  END IF;
END $$;