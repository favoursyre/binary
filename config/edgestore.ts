'use client';
///This is the configuration for edgestore

//Libraries -->
import { type EdgeStoreRouter } from '../app/api/edgestore/[...edgestore]/route';
import { createEdgeStoreProvider } from '@edgestore/react';
 
///Commencing the code
const { EdgeStoreProvider, useEdgeStore } =
  createEdgeStoreProvider<EdgeStoreRouter>();
 
export { EdgeStoreProvider, useEdgeStore };