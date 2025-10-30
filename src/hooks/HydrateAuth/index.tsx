"use client";
import { setInitialized, setUser } from '../../redux/slices/user';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import Cookies from "js-cookie";

export default function HydrateAuth({ children }:{ children: React.ReactNode }) {
    const dispatch = useDispatch();
    const [isMounted, setIsMounted] = useState(false); // Track client-side mount

    useEffect(() => {
      const storedUser = Cookies.get("user"); 
      
      if (storedUser) {
        dispatch(setUser(JSON.parse(storedUser)));
      }else{
        dispatch(setInitialized());
      }
  
      setIsMounted(true); // Mark component as mounted
    }, [dispatch]);

    if (!isMounted) return null; // Prevent SSR-client mismatch
  
    return children;
  }