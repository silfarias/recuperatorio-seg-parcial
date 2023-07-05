-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 05-07-2023 a las 19:57:20
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `reservadb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservas`
--

DROP TABLE IF EXISTS `reservas`;
CREATE TABLE IF NOT EXISTS `reservas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `codigo` varchar(100) NOT NULL DEFAULT '1688583843638',
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `dni` int NOT NULL,
  `telefono` int NOT NULL,
  `destino` varchar(255) NOT NULL,
  `costo` enum('primera clase: $10000','común: $5000') NOT NULL,
  `fecha_solicitud` datetime NOT NULL,
  `fecha_vuelo` datetime NOT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `codigo` (`codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `reservas`
--

INSERT INTO `reservas` (`id`, `codigo`, `nombre`, `apellido`, `dni`, `telefono`, `destino`, `costo`, `fecha_solicitud`, `fecha_vuelo`, `estado`, `createdAt`, `updatedAt`) VALUES
(1, '1688584032551', 'John', 'Doe', 123456789, 987654321, 'New York', 'primera clase: $10000', '2023-07-05 12:30:00', '2023-07-10 18:00:00', 1, '2023-07-05 19:07:12', '2023-07-05 19:07:12'),
(2, '1688584073035', 'Lucas', 'Britez', 74583837, 987654321, 'New York', 'primera clase: $10000', '2023-07-05 12:30:00', '2023-07-10 18:00:00', 1, '2023-07-05 19:07:53', '2023-07-05 19:07:53'),
(3, '1688584088219', 'sergio', 'valdez', 7383883, 987654321, 'New York', 'primera clase: $10000', '2023-07-05 12:30:00', '2023-07-10 18:00:00', 1, '2023-07-05 19:08:08', '2023-07-05 19:08:08'),
(4, '1688584425158', 'Luna', 'Chavez', 2147483647, 748783483, 'Cancun', 'común: $5000', '2023-07-13 22:13:00', '2023-07-07 22:13:00', 0, '2023-07-05 19:13:45', '2023-07-05 19:19:44'),
(5, '1688585325078', 'fabian', 'fiore', 434342, 324232, 'brasil', 'común: $5000', '2023-07-05 19:28:00', '2023-07-06 19:28:00', 1, '2023-07-05 19:28:45', '2023-07-05 19:28:45'),
(6, '1688585709316', 'Lisandro', 'ledesma', 123456789, 987654321, 'Maldivas', 'primera clase: $10000', '2023-07-01 12:00:00', '2023-07-05 15:00:00', 0, '2023-07-05 19:35:09', '2023-07-05 19:36:30'),
(7, '1688585979421', 'Luna', 'Chavez', 8765444, 9887655, 'holanda', 'primera clase: $10000', '2023-07-04 19:39:00', '2023-07-07 19:39:00', 1, '2023-07-05 19:39:39', '2023-07-05 19:39:39'),
(8, '1688586563320', 'Lisandro', 'ledesma', 123456789, 987654321, 'Maldivas', 'primera clase: $10000', '2023-07-01 12:00:00', '2023-07-05 15:00:00', 1, '2023-07-05 19:49:23', '2023-07-05 19:49:23'),
(9, '1688586593333', 'luquitas', 'britez', 123456789, 987654321, 'Maldivas', 'primera clase: $10000', '2023-07-01 12:00:00', '2023-07-05 15:00:00', 0, '2023-07-05 19:49:53', '2023-07-05 19:50:47'),
(10, '1688586641755', 'Luna', 'Chavez', 55543334, 5454656, 'maldivas', 'primera clase: $10000', '2023-07-05 19:50:00', '2023-07-06 19:50:00', 1, '2023-07-05 19:50:41', '2023-07-05 19:50:41');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
