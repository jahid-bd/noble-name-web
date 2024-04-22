import UserLayout from "@/components/layout/UserLayout";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return <UserLayout>{children}</UserLayout>;
};

export default Layout;
