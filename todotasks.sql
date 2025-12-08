CREATE TABLE task (
  TaskID int(11) PRIMARY KEY NOT NULL,
  TaskTitle varchar(500) NOT NULL AUTO_INCREMENT,
  TaskDescription varchar(1000) NOT NULL,
  Status int(11) NOT NULL DEFAULT 1,
  EnterDate datetime NOT NULL DEFAULT current_timestamp()
);

INSERT INTO task (TaskTitle,TaskDescription, Status, EnterDate) VALUES
('test', 'test', 0, '2025-10-03 05:27:21');

