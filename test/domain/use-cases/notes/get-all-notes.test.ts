import NotesRepository from '../../../../src/domain/interfaces/repositories/notes-repository';

import {
  NotesRequestModel,
  NotesResponseModel,
} from '../../../../src/domain/models/notes';
import GetAllNotes from '../../../../src/domain/use-cases/get-all-notes';

describe('Get all notes use case', () => {
  class MockNotesRepository implements NotesRepository {
    createNote(note: NotesRequestModel): Promise<NotesResponseModel> {
      throw new Error('Method not implemented.');
    }
    deleteNote(id: string): Promise<void> {
      throw new Error('Method not implemented.');
    }
    updateNote(
      id: string,
      data: NotesRequestModel
    ): Promise<NotesResponseModel> {
      throw new Error('Method not implemented.');
    }
    getNote(id: string): Promise<NotesResponseModel | null> {
      throw new Error('Method not implemented.');
    }
    getNotes(): Promise<NotesResponseModel[]> {
      throw new Error('Method not implemented.');
    }
  }

  let mockNotesRepository: MockNotesRepository;

  beforeEach(() => {
    jest.clearAllMocks();

    mockNotesRepository = new MockNotesRepository();
  });

  test('should return notes', async () => {
    //arrange
    const ExpectedResult: NotesResponseModel[] = [
      { id: '1', content: 'first', important: true },
      { id: '2', content: 'second', important: false },
    ];

    //act
    jest
      .spyOn(mockNotesRepository, 'getNotes')
      .mockImplementation(() => Promise.resolve(ExpectedResult));

    const getAllNotesUseCase = new GetAllNotes(mockNotesRepository);

    const result = await getAllNotesUseCase.execute();

    //assert
    expect(result).toStrictEqual(ExpectedResult);
  });
});
