'use client'

import React from 'react';
import { usePathname } from 'next/navigation';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbItem {
  label: string;
  path: string;
  isLast: boolean;
}

const DynamicBreadcrumbs = () => {
  const pathname = usePathname();

  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    // Remover barras duplas e barras no final
    const cleanPath = pathname.replace(/\/\/+/g, '/').replace(/\/$/, '');
    
    // Dividir o caminho em segmentos
    const segments = cleanPath.split('/').filter(Boolean);
    
    // Gerar os items do breadcrumb
    return segments.map((segment, index) => {
      // Construir o caminho para este item
      const path = `/${segments.slice(0, index + 1).join('/')}`;
      
      // Formatar o label (converter de kebab-case ou snake_case para Title Case)
      const label = segment
        .replace(/[-_]/g, ' ')
        .replace(/\b\w/g, (char) => char.toUpperCase());
      
      return {
        label,
        path,
        isLast: index === segments.length - 1
      };
    });
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {/* Home sempre visível em desktop */}
        <BreadcrumbItem className="hidden md:block">
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        
        {breadcrumbs.length > 0 && (
          <BreadcrumbSeparator className="hidden md:block" />
        )}

        {/* Breadcrumbs dinâmicos */}
        {breadcrumbs.map((item, index) => (
          <React.Fragment key={item.path}>
            <BreadcrumbItem>
              {item.isLast ? (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={item.path}>{item.label}</BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {!item.isLast && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default DynamicBreadcrumbs;