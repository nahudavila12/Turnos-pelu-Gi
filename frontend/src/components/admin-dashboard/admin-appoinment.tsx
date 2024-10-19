import React, { useState } from 'react';
import {
  useToast,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

interface Appointment {
  id: number;
  client: string;
  service: string;
  date: string;
}

interface AppointmentTableProps {
  appointments: Appointment[];
}

export const AppointmentTable: React.FC<AppointmentTableProps> = ({ appointments }) => {
  const toast = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAppointmentId, setSelectedAppointmentId] = useState<number | null>(null);

  const handleCancel = (id: number) => {
    setSelectedAppointmentId(id);
    setIsModalOpen(true);
  };

  const handleConfirmCancel = () => {
    if (selectedAppointmentId !== null) {
      // Aquí puedes agregar la lógica para cancelar la reserva
      console.log(`Reserva con id ${selectedAppointmentId} cancelada.`);
      
      toast({
        title: "Reserva Cancelada",
        description: "La reserva ha sido cancelada con éxito.",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    }
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedAppointmentId(null);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-purple-500 text-white">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Cliente</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Servicio</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Fecha y Hora</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Acciones</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {appointments.map((appointment, index) => (
            <tr key={appointment.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              <td className="px-6 py-4 whitespace-nowrap text-gray-700">{appointment.client}</td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-700">{appointment.service}</td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-700">{appointment.date}</td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                <button
                  onClick={() => handleCancel(appointment.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Cancelar Reserva
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal de Confirmación */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirmación de Cancelación</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            ¿Estás seguro que quieres cancelar esta reserva?
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" onClick={handleConfirmCancel}>
              Cancelar Reserva
            </Button>
            <Button variant="ghost" onClick={handleCloseModal}>
              No Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
