
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Modern Communication System | EV Charging Infrastructure & EPC',
  description: 'End-to-end EV charging infrastructure, electrical, civil, EPC, canopy, fabrication, solar and O&M solutions across India.',
  keywords: ['EV Charging Infrastructure', 'EV EPC', 'EV Charger Installation', 'EV Canopy', 'Factory Shed', 'Electrical EPC', 'Modern Communication System'],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
