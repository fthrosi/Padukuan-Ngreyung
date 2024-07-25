// src/components/Sidebar.js
"use client"
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import { auth } from '@/service/firebase';
import { Button } from '@nextui-org/react';
const Sidebar = () => {
  const router = useRouter();
  const handleLogout = async () => {
    try {
        await signOut(auth);
        router.push('/login')
    } catch (error) {
        console.error(error);
    }
};
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-5 fixed">
      <h2 className="text-2xl font-semibold mb-5 mt-10">Admin Panel</h2>
      <nav>
        <ul className='space-y-7'>
          <li className="mb-4">
            <Link href="/admin/kegiatan">
              <h1 className='text-xl'>Kegiatan</h1>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/admin/galeri">
              <h1 className='text-xl'>
                Galery
              </h1>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/admin/about/pertama">
              <h1 className='text-xl'>
                About Pertama
              </h1>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/admin/about/kedua">
              <h1 className='text-xl'>
                About Kedua
              </h1>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/admin/about/ketiga">
              <h1 className='text-xl'>
                About Ketiga
              </h1>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/admin/about/keempat">
              <h1 className='text-xl'>
                About Keempat
              </h1>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/admin/about/pejabat/Dukuh">
              <h1 className='text-xl'>
                Dukuh
              </h1>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/admin/about/pejabat/Rt1">
              <h1 className='text-xl'>
                RT 1
              </h1>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/admin/about/pejabat/Rt2">
              <h1 className='text-xl'>
                RT 2
              </h1>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/admin/about/pejabat/Rt3">
              <h1 className='text-xl'>
                RT 3
              </h1>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/admin/about/pejabat/Rw">
              <h1 className='text-xl'>
                RW
              </h1>
            </Link>
          </li>
          <li className="mb-4">
            <Button color='danger' onClick={handleLogout}>
            Logout
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
