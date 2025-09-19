import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const AdminTemples = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Temples Management</CardTitle>
        <CardDescription>Manage temple information and services</CardDescription>
      </CardHeader>
      <CardContent>
        <Button>Add Temple</Button>
      </CardContent>
    </Card>
  );
};