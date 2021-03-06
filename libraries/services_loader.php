<?php

namespace Symfony\Component\DependencyInjection\Loader\Configurator;

use Symfony\Component\DependencyInjection\Reference;

return function (ContainerConfigurator $configurator) {
    $services = $configurator->services();
    $loadServices = function (array $servicesFile, ServicesConfigurator $services): void {
        foreach ($servicesFile['services'] as $serviceName => $service) {
            if (is_string($service)) {
                $services->alias($serviceName, $service);
                continue;
            }
            $theService = $services->set($serviceName, $service['class'] ?? null);
            if (isset($service['arguments']) && $service['arguments'] !== null) {
                foreach ($service['arguments'] as &$argumentName) {
                    if ($argumentName[0] === '@') {
                        $services->alias($serviceName, substr($argumentName, 1));
                        $argumentName = new Reference(substr($argumentName, 1));
                    }
                }
                $theService->args($service['arguments']);
            }
            if (isset($service['factory']) && $service['factory'] !== null) {
                $theService->factory($service['factory']);
            }
        }
    };

    $servicesFile = include ROOT_PATH . 'libraries/services.php';
    $loadServices($servicesFile, $services);
    $servicesFile = include ROOT_PATH . 'libraries/services_controllers.php';
    $loadServices($servicesFile, $services);
};
