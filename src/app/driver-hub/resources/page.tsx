
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Page() {
    return (
        <div className="p-4 md:p-8">
            <Card>
                <CardHeader>
                    <CardTitle>Resources</CardTitle>
                    <CardDescription>This page is under construction. Check back soon for updates!</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>This page will contain helpful resources.</p>
                </CardContent>
            </Card>
        </div>
    );
}
