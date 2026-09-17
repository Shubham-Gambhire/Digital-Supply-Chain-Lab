// Compatibility shim: lets the copied site code keep importing
// 'react-router-dom' while this app runs on TanStack Router.
import React from 'react';
import {
  Link as TanStackLink,
  useParams as tanStackUseParams,
  useNavigate as tanStackUseNavigate,
  useLocation as tanStackUseLocation,
  useRouterState,
} from '@tanstack/react-router';

export function Link({ to, children, ...rest }) {
  return (
    <TanStackLink to={to} {...rest}>
      {children}
    </TanStackLink>
  );
}

export function NavLink({ to, className, children, ...rest }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isActive =
    to === '/' ? pathname === '/' : pathname === to || pathname.startsWith(to + '/');
  const resolvedClassName =
    typeof className === 'function' ? className({ isActive }) : className;
  return (
    <TanStackLink to={to} className={resolvedClassName} {...rest}>
      {children}
    </TanStackLink>
  );
}

export function useParams() {
  return tanStackUseParams({ strict: false });
}

export function useNavigate() {
  const navigate = tanStackUseNavigate();
  return (to, options) => {
    if (typeof to === 'number') {
      window.history.go(to);
      return;
    }
    return navigate({ to, ...options });
  };
}

export function useLocation() {
  return tanStackUseLocation();
}
