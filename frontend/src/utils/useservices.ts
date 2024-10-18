import { useState } from 'react';
import { Service, ServiceItem, services, SubService } from './data-service';


export const useServices = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedSubService, setSelectedSubService] = useState<SubService | null>(null);
  const [selectedItem, setSelectedItem] = useState<ServiceItem | null>(null);

  const selectService = (serviceId: string) => {
    const service = services.find(s => s.id === serviceId) || null;
    setSelectedService(service);
    setSelectedSubService(null);
    setSelectedItem(null);
  };

  const selectSubService = (subServiceId: string) => {
    if (!selectedService) return;
    const subService = selectedService.subServices.find(s => s.id === subServiceId) || null;
    setSelectedSubService(subService);
    setSelectedItem(null);
  };

  const selectItem = (itemId: string) => {
    if (!selectedSubService) return;
    const item = selectedSubService.items.find(i => i.id === itemId) || null;
    setSelectedItem(item);
  };

  const resetSelection = () => {
    setSelectedItem(null);
    setSelectedSubService(null);
    setSelectedService(null);
  };

  const goBack = () => {
    if (selectedItem) {
      setSelectedItem(null);
    } else if (selectedSubService) {
      setSelectedSubService(null);
    } else {
      resetSelection();
    }
  };

  return {
    services,
    selectedService,
    selectedSubService,
    selectedItem,
    selectService,
    selectSubService,
    selectItem,
    resetSelection,
    goBack
  };
};