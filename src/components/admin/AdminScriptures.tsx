import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const AdminScriptures = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Scriptures Management</CardTitle>
        <CardDescription>Manage spiritual scriptures and texts</CardDescription>
      </CardHeader>
      <CardContent>
        <Button>Add Scripture</Button>
      </CardContent>
    </Card>
  );
};