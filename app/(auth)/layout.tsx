import Image from "next/image";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="flex min-h-screen w-full justify-between font-inter">
          {children}
      <div className="auth-asset">
          <div>
            <Image 
                src="/icons/Men_invest_and_have_made_a_profit_generated.jpg"
                alt="Auth image"
                width={800}
                height={500}
            />   
          </div>
        </div>    
      </main>
    );
  }
  