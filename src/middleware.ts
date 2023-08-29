import { NextRequest, NextResponse } from 'next/server';

import { User } from '~/commons/firebase/users/types';

export interface RequestWithUser extends NextRequest {
  user: User
}

// This function can be marked `async` if using `await` inside
export async function middleware(request: RequestWithUser) {
  const authorization = request.headers.get('Authorization');

  if (!authorization) {
    return NextResponse.json({ message: 'UNAUTHORIZED' }, { status: 401 });
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/api/user/me',
}