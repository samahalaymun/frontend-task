import ProfileSkeleton from "@/components/common/ProfileSkeleton";
import { useFetchUser } from "@/hooks/useFetchUser";
import React from "react";
import InfoItem from "./InfoItem";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function ProfilePage() {
  const { data:user, isPending, isError, error } = useFetchUser();
  if (isPending) return <ProfileSkeleton />;
  return (
    <div className="max-w-5xl mx-auto md:p-4 lg:p-6 space-y-6">
      
      <Card className="flex items-center gap-6 p-6">
        <img
          src={user.image}
          alt={user.firstName}
          className="w-28 h-28 rounded-full border-4 border-primary/30"
        />
        <div className="space-y-2 flex flex-col items-center ">
          <CardTitle className="text-2xl font-bold text-gray-800">
            {user.firstName} {user.lastName}
          </CardTitle>
          <CardDescription className="text-gray-600">
            @{user.username} — {user.email}
          </CardDescription>
          <div className="flex items-center gap-3">
            <Badge variant="outline">{user.role}</Badge>
            <Badge>{user.company?.department}</Badge>
          </div>
        </div>
      </Card>

     
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>Basic details about the user</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InfoItem
            label="Full Name"
            value={`${user.firstName} ${user.lastName}`}
          />
          <InfoItem label="Age" value={user.age} />
          <InfoItem label="Gender" value={user.gender} />
          <InfoItem label="Email" value={user.email} />
          <InfoItem label="Phone" value={user.phone} />
          <InfoItem label="Birth Date" value={user.birthDate} />
          <InfoItem label="Blood Group" value={user.bloodGroup} />
          <InfoItem label="Eye Color" value={user.eyeColor} />
          <InfoItem
            label="Hair"
            value={`${user.hair?.color}, ${user.hair?.type}`}
          />
        </CardContent>
      </Card>

    
      <Card>
        <CardHeader>
          <CardTitle>Address</CardTitle>
          <CardDescription>Where the user lives</CardDescription>
        </CardHeader>
        <CardContent className="space-y-1">
          <p className="text-sm text-gray-700">
            {user?.address.address}, {user?.address.city}, {user?.address.state}{" "}
            {user?.address.postalCode}
          </p>
          <p className="text-sm text-gray-500">{user.address.country}</p>
        </CardContent>
      </Card>

     
      <Card>
        <CardHeader>
          <CardTitle>Company</CardTitle>
          <CardDescription>Employer and position details</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InfoItem label="Company Name" value={user.company?.name} />
          <InfoItem label="Department" value={user.company?.department} />
          <InfoItem label="Title" value={user.company?.title} />
          <InfoItem
            label="Company Address"
            value={`${user.company?.address?.city}, ${user.company?.address?.state}`}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Bank Details</CardTitle>
          <CardDescription>Confidential financial information</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InfoItem label="Card Type" value={user.bank?.cardType} />
          <InfoItem label="Card Number" value={user.bank?.cardNumber} />
          <InfoItem label="Card Expiry" value={user.bank?.cardExpire} />
          <InfoItem label="IBAN" value={user.bank?.iban} />
          <InfoItem label="Currency" value={user.bank?.currency} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Crypto Wallet</CardTitle>
          <CardDescription>Digital assets details</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InfoItem label="Coin" value={user.crypto?.coin} />
          <InfoItem label="Network" value={user.crypto?.network} />
          <InfoItem label="Wallet Address" value={user.crypto?.wallet} />
        </CardContent>
      </Card>
    </div>
  );
}

export default ProfilePage;
