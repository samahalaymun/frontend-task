import { useAuthStore } from "@/store/authStore";
import React from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";

export default function Navbar() {
  const { user, logout } = useAuthStore((state) => state);

  return (
    <nav className="bg-white shadow px-2 py-3 md:p-4 flex items-center justify-between">
      <Link to="/" className="font-bold text-lg md:text-3xl">
        TRADEZ
      </Link>
      <div className="flex gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghots">
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src={user.image} alt="@shadcn" />
                </Avatar>
                <span className="text-base hidden md:block">
                  {user.firstName}
                </span>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="start">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Link to="/profile">Profile</Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={logout}>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
