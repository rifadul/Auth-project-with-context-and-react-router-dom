import { AuthProvider } from "./AuthContext";

export function ContextProviders({ children }) {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    )
}