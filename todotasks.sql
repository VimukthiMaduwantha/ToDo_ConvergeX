-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 06, 2025 at 05:21 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `todotasks`
--

-- --------------------------------------------------------

--
-- Table structure for table `task`
--

CREATE TABLE `task` (
  `TaskID` int(11) NOT NULL,
  `TaskTitle` varchar(500) NOT NULL,
  `TaskDescription` varchar(1000) NOT NULL,
  `Status` int(11) NOT NULL DEFAULT 1,
  `EnterDate` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `task`
--

INSERT INTO `task` (`TaskID`, `TaskTitle`, `TaskDescription`, `Status`, `EnterDate`) VALUES
(1, 'test', 'test', 0, '2025-10-03 05:27:21'),
(2, 'tr', 'grtr', 0, '2025-10-03 05:56:03'),
(3, 'tr', 'grtr', 0, '2025-10-03 05:56:24'),
(4, 're', 'e', 0, '2025-10-03 05:56:29'),
(5, 're', 'e', 0, '2025-10-03 05:56:47'),
(6, 're', 'e', 0, '2025-10-03 05:57:07'),
(7, 're', 'e', 0, '2025-10-03 05:58:36'),
(8, 'hello ', 'hduiscisabc sbfiosdafb i oas dhjsifl fjds iafhupashfbnc nudshfb cdjsoihfbdfisafg ', 0, '2025-10-03 05:58:52'),
(9, 'wwr', 'weww', 0, '2025-10-03 06:02:57'),
(10, 'new', 'In MUI TextField, you can make it behave like a textarea by using the multiline prop. You can also control rows with rows or minRows / maxRows. In MUI TextField, you can make it behave like a textarea by using the multiline prop.You can also control rows with rows or minRows / maxRows.', 0, '2025-10-03 06:45:50'),
(11, 'hellohbfvsdb', 'cvdsfscsd', 0, '2025-10-03 06:54:23'),
(12, 'helloooo', 'In MUI TextField, you can make it behave like a textarea by using the multiline prop. You can also control rows with rows or minRows / maxRows. In MUI TextField, you can make it behave like a textarea by using the multiline prop.You can also control rows with rows or minRows / maxRows.In MUI TextField, you can make it behave like a textarea by using the multiline prop. You can also control rows with rows or minRows / maxRows. In MUI TextField, you can make it behave like a textarea by using the multiline prop.You can also control rows with rows or minRows / maxRows.In MUI TextField, you can make it behave like a textarea by using the multiline prop. You can also control rows with rows or minRows / maxRows. In MUI TextField, you can make it behave like a textarea by using the multiline prop.You can also control rows with rows or minRows / maxRows.In MUI TextField, you can make it behave like a textarea by using the multiline prop. You can also control rows with rows or minRows / maxRows', 0, '2025-10-03 06:55:45'),
(13, 'ftftfyycvyvtv', 'fsdggfgdfg', 0, '2025-10-03 08:45:03'),
(14, 'fdgdfg', 'fgdsgfgd', 0, '2025-10-03 08:45:15'),
(15, 'test', 'svxv', 0, '2025-10-03 09:00:04'),
(16, 'fgbb', 'gfbfb', 0, '2025-10-03 09:01:12'),
(17, 'grgt', 'trgrgrrgr', 0, '2025-10-03 10:01:11'),
(18, 'fsdfsd', 'sdfdsfsd', 0, '2025-10-03 10:03:08'),
(19, 'rhrt', 'rtdhtr', 0, '2025-10-03 10:03:32'),
(20, 'tsrhrthrt', 'dsfgd', 0, '2025-10-03 10:03:36'),
(21, 'ertwet', 'sfdsgsd', 0, '2025-10-03 10:03:40'),
(22, 'rete', 'terte', 0, '2025-10-03 10:03:43'),
(23, 'reter', 'retet', 0, '2025-10-03 10:03:46'),
(24, 'ds', 'ge', 0, '2025-10-03 10:04:15'),
(25, 'trrt', 'grgrte', 0, '2025-10-03 10:45:24'),
(26, 'retgregegt', 'retgregtre', 0, '2025-10-03 10:45:28'),
(27, 'esretw', 'weqrewqrew', 0, '2025-10-03 10:46:30'),
(28, 'asDDCdascsd', 'csdsdcdsc', 0, '2025-10-03 10:46:34'),
(29, 'fdsfasdfs', 'fdsafsafasf', 0, '2025-10-03 10:46:38'),
(30, 'fdsafddf', 'sfasfds', 0, '2025-10-03 10:46:42'),
(31, 'sdfds', 'sdafdsa', 0, '2025-10-03 10:46:55'),
(32, 'fdd', 'dfd', 0, '2025-10-03 10:47:17'),
(33, 'Help Saman', 'Saman needs help with his software project', 1, '2025-10-05 03:41:36'),
(34, 'Play cricket', 'Plan the soft ball cricket match on next Sunday', 1, '2025-10-05 03:42:25'),
(35, 'Takehome assignment', 'Finish the mid term assignment', 1, '2025-10-05 03:43:22'),
(36, 'Clean home', 'Need to clean the bed rrom', 1, '2025-10-05 03:43:44'),
(37, 'Buy books', 'Buy the books for the next school year', 1, '2025-10-05 03:44:16');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`TaskID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `task`
--
ALTER TABLE `task`
  MODIFY `TaskID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
